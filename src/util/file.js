// import fs from 'fs';
// import ps from 'path';

/*
export function walk2(path, done) {
  const fs = window.require('fs');
  const ps = window.require('path');

  let r = [];
  fs.readdir(path, (error, list) => {
    if (error) return done(error);

    var pending = list.length;
    if (!pending) return done(null, r);

    for (let file of list) {
      file = ps.resolve(path, file);

      fs.stat(file, (error, stat) => {
        if (stat && stat.isDirectory()) {
          walk(file, (error, res) => {
            r = r.concat(res);
            if (!--pending) done(null, r);
          });
        } else {
          r.push(file);
          if (!--pending) done(null, r);
        }
      });
    }
  });
}
*/

// get files and directories in given path recursively
const readdirAsync = (dir) => {
    const fs = window.require('fs');

    return new Promise((resolve, reject) => {
        fs.readdir(dir, (error, list) => {
            if (error) {
                reject(error);
            } else {
                resolve(list);
            }
        });
    });
}

// get file status
const statAsync = (file) => {
    const fs = window.require('fs');

    return new Promise((resolve, reject) => {
        fs.stat(file, (error, stat) => {
            if (error) {
                reject(error);
            } else {
                resolve(stat);
            }
        });
    });
}

// inner function
export function walk(path) {
    const ps = window.require('path');
    const fs = window.require('fs');

    return readdirAsync(path).then((list) => {
        return Promise.all(list.map((file) => {
            file = ps.resolve(path, file);
            return statAsync(file).then((stat) => {
                if (stat.isDirectory()) {
                    return walk(file);
                } else {
                    return file;
                }
            });
        }));
    }).then((results) => {
        // flatten the array of arrays
        return Array.prototype.concat.apply([], results);
    });
}

// TODO: process.env[process.platform == "win32" ? "USERPROFILE" : "HOME"]
