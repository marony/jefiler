// import fs from 'fs';
// import ps from 'path';

export const walk = (path, f) => {
  const fs = window.require('fs');
  const ps = window.require('path');

  fs.readdir(path, (error, files) => {
    if (error)
      throw error;
    for (const file of files) {
      const filePath = ps.join(path, file);
      fs.stat(filePath, (error, stats) => {
        if (stats.isDirectory())
          walk(filePath, f);
        else if (f != null)
          f(filePath, stats);
      });
    }
  });
}
