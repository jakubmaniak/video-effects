export default Promise.all([
    import('./_default'),
    import('./grayscale'),
    import('./infrared-vision'),
    import('./noctovision'),
    import('./red-turquoise')
]);