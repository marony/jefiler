import Fs from 'fs';
import Path from 'Path';

const walk = (path, f) => {
  Fs.readdir(path, (error, files) => {
    if (error)
      throw error;
    for (const file of files) {
      const filePath = Path.join(path, file);
      Fs.stat(filePath, (error, stats) => {
        if (stats.isDirectory())
          walk(filePath, f);
        else
          f(filePath, stats);
      });
    }
  });
}

export default walk;
