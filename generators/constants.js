var path = require('path');

// additional configuration files to generate
const EXT_XMLS = ['xl-rest-endpoints', 'xl-ui-plugin'];

// test frameworks to use
const TEST_FRAMEWORKS = ['karma', 'unittest'];

// base task types
const BASE_TASK_TYPES = [
    'xlrelease.PythonScript'
];

// base tile types
const BASE_TILE_TYPES = [
    'xlrelease.Tile'
];

// template paths
const BUILD = 'gradlebuild';
const RESOURCES = 'resources';
const NPM = 'npm';
const KARMA = 'karma';
const UNITTEST = 'unittest';
const APP_TEMPLATE_PATHS = {
    BUILD,
    RESOURCES,
    NPM,
    KARMA,
    UNITTEST
};

// task paths
const TASK_TEMPLATE_PATHS = {};

// tile paths
const TILE_TEMPLATE_PATHS = {};

// plugin paths
const SRC = 'src';
const MAIN = path.join(SRC, 'main');
const TEST = path.join(SRC, 'test');
const MAIN_RESOURCES = path.join(MAIN, 'resources');
const TEST_JYTHON_UNIT = path.join(TEST, 'jython');
const TEST_JYTHON_UNIT_RUNNER = path.join(TEST_JYTHON_UNIT, 'xlunittestrunner');
const TEST_JS_UNIT = path.join(TEST, 'javascript', 'unit');
const WEB = path.join(MAIN_RESOURCES, 'web');
const WEB_INCLUDE = path.join(WEB, 'include');
const PLUGIN_PATHS = {
    MAIN,
    MAIN_RESOURCES,
    WEB,
    WEB_INCLUDE,
    TEST,
    TEST_JS_UNIT,
    TEST_JYTHON_UNIT,
    TEST_JYTHON_UNIT_RUNNER
};

module.exports = {
    EXT_XMLS,
    TEST_FRAMEWORKS,
    BASE_TASK_TYPES,
    BASE_TILE_TYPES,
    APP_TEMPLATE_PATHS,
    TASK_TEMPLATE_PATHS,
    TILE_TEMPLATE_PATHS,
    PLUGIN_PATHS
};
