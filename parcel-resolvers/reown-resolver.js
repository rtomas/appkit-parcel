const { Resolver } = require("@parcel/plugin");
const path = require("path");

module.exports = new Resolver({
  async resolve({ specifier, dependency, options }) {

    // @reown/appkit-scaffold-ui/w3m-modal
    if (specifier.startsWith('@reown/appkit-scaffold-ui/')) {
        const filePath = path.join(
            options.projectRoot,
            'node_modules',
            '@reown',
            'appkit-scaffold-ui',
            'dist',
            'esm',
            'exports',
            'index.js'
        );
    
        return {
            filePath: filePath,
        };
    } else 
    // Check if the specifier starts with '@reown/appkit/'
    if (specifier.startsWith('@reown/appkit/')) {
      // Extract the module name (e.g., 'networks', 'store', etc.)
      const moduleName = specifier.replace('@reown/appkit/', '');

      // Construct the path dynamically
      const filePath = path.join(
        options.projectRoot,
        'node_modules',
        '@reown',
        'appkit',
        'dist',
        'esm',
        'exports',
        `${moduleName}.js`
      );

      return {
        filePath: filePath,
      };
    }

    // If the specifier doesn't match, return null
    return null;
  },
});
