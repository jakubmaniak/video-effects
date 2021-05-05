export default Promise.all([
    import('./_default'),
    import('./grayscale'),
    import('./sepia'),
    import('./infrared-vision'),
    import('./noctovision'),
    import('./binoculars'),
    import('./red-turquoise')
]);