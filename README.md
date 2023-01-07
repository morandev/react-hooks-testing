# react-context-router-jest

1. Instalaciones:
```
npm add --dev jest babel-jest @babel/preset-env @babel/preset-react 
npm add --dev @testing-library/react @types/jest jest-environment-jsdom
```

2. Fetch API:
```
npm add --dev whatwg-fetch
```

3. Actualizar los scripts del __package.json__
```
"scripts: {
  ...
  "test": "jest --watchAll"
```

4. Crear la configuración de babel __babel.config.cjs__
```
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
```

5. Crear Jest config

__jest.config.cjs__
```
module.exports = {
    testEnvironment: 'jest-environment-jsdom'
}
```

