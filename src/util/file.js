'use strict';

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
};

// get file status
const statAsync = (file) => {
    const fs = window.require('fs');

    return new Promise((resolve, reject) => {
        // console.log(`statAsync1: ${file}`);
        fs.stat(file, (error, stat) => {
            if (error) {
                // console.log(`statAsync2: ${file}, ${error}`);
                reject(error);
            } else {
                resolve(stat);
            }
        });
    });
};

// walk directories recursively
export function walk(path) {
    const ps = window.require('path');

    return readdirAsync(path).then(list => {
        return Promise.all(list.map(file => {
            file = ps.resolve(path, file);
            return statAsync(file).then((stat) => {
                if (stat.isDirectory()) {
                    return walk(file);
                } else {
                    return file;
                }
            }).catch(error => {
                // console.log(`ERROR: ${file}, ${error}`);
            });
        }));
    }).then((results) => {
        // flatten the array of arrays
        return Array.prototype.concat.apply([], results);
    });
}

export function homeDir() {
    // TODO: i cannot get home directory
    // const osenv = window.require('osenv');
    //
    // return osenv.home();

    // return process.env[process.platform == "win32" ? "USERPROFILE" : "HOME"]

    // const {app} = window.require('electron');
    // console.log(app);
    // const r =  app.getPath('home');
    // console.log(r);
    // return r;

    return './src';
}
