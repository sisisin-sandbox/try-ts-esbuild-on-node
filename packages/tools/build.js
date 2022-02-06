const { build } = require('esbuild');
const path = require('path');
const targetDir = path.resolve(__dirname, '../server');
const nodemon = require('nodemon');

build({
  absWorkingDir: targetDir,
  entryPoints: ['./src/index.ts'],
  // outdir: './dist',
  outfile: './dist/out.js',
  external: ['./node_modules/*', 'mod_a'],
  bundle: true,
  platform: 'node',
  target: 'node16.9',
  sourcemap: true,
  format: 'cjs',
  watch: true,
})
  .then((result) => {
    nodemon({
      script: './dist/out.js',
      cwd: targetDir,
    });
  })
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
