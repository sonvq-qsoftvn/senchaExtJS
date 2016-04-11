/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('QsoftTrainingApp.common.variable.Global', {
    alias: 'widget.AppConstants',
    singleton: true,
    baseApiURL: 'http://localhost/extjs/theming-team-workspace/qsoft-training-api/public/v1/'    
});
