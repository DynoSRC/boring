/* eslint-disable camelcase */
/**
 * This is HEAVILY inspired by the patterns found
 * in the paths module ejected from react-scripts (CRA)
 */

const config = require('./boring-config');
const path = require('path');

const proj_dir = path.normalize(config.get('boring.paths.proj_dir', process.cwd()));
const base_app_path_key = 'boring.paths.base_app_path';

const base_app_path = path.normalize(config.get(base_app_path_key, 'dist'));
const boring_dir = path.normalize(__dirname + '/../../');

// this will really only be set to src for unit tests purposes
const boring_app_path = path.normalize(config.get('boring.paths.boring_app_path', 'dist'));


function getProjPath(key, defaultVal) {
  return path.normalize(proj_dir +'/'+ config.get(key, defaultVal));
}

function getAppDirPath(key, defaultVal) {
  return path.normalize(getProjPath(base_app_path_key, base_app_path) + '/'+ config.get(key, defaultVal));
}

function getBoringPath(key, defaultVal) {
  return path.normalize(boring_dir + '/' + config.get(key, defaultVal));
}

function getBoringAppPath(key, defaultVal) {
  return path.normalize(boring_dir + '/' + boring_app_path + config.get(key, defaultVal));
}

const server_base = config.get('boring.paths.server_base', '/server');

module.exports = {

  proj_dir,
  boring_dir,
  base_app_path,

  app_build: getProjPath('boring.paths.app_build', 'build'),
  app_dist: getProjPath('boring.paths.app_dist', 'dist'),
  app_config: getProjPath('boring.paths.app_config', 'config'),
  app_src: getProjPath('boring.paths.app_src', 'src'),
  app_node_modules: getProjPath('boring.paths.node_modules', 'node_modules'),
  app_package_json: getProjPath('boring.paths.package_json', 'package.json'),
  app_dir: getProjPath(base_app_path_key, base_app_path),
  boring_app_dir: getBoringAppPath('__no_key__', ''),

  server_base: server_base,
  main_server: getAppDirPath('boring.paths.server_app', server_base + '/app'),
  server_routers: getAppDirPath('boring.paths.server_routers', server_base + '/routers'),
  server_middleware: getAppDirPath('boring.paths.server_middleware', server_base + '/middleware'),
  server_hooks: getAppDirPath('boring.paths.server_hooks', server_base + '/hooks'),
  server_decorators: getAppDirPath('boring.paths.server_decorators', server_base + '/decorators'),

  boring_routers: getBoringAppPath('boring.paths.boring_routers', `/lib/init-routers/core-routers`),
  boring_middleware: getBoringAppPath('boring.paths.boring_middleware', `/lib/init-middleware/core-middleware`),
  boring_hooks: getBoringAppPath('boring.paths.boring_hooks', `/lib/init-hooks/core-hooks`),
  boring_decorators: getBoringAppPath('boring.paths.boring_decorators', `/lib/init-decorators/core-decorators`),

  boring_webpack_dev_config: getBoringPath('boring.paths.boring_webpack_dev_config', '/config/runtime/webpack.config.dev.js'),
  boring_webpack_prod_config: getBoringPath('boring.paths.boring_webpack_prod_config', '/config/runtime/webpack.config.prod.js'),

  asset_manifest: getProjPath('boring.paths.asset_manifest', '/build/asset-manifest.json'),
};
