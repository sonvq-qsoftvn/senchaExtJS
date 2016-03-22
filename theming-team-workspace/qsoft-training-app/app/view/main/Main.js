/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('QsoftTrainingApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'QsoftTrainingApp.view.main.MainController',
        'QsoftTrainingApp.view.main.MainModel',
        'QsoftTrainingApp.view.user.UserList',
        'QsoftTrainingApp.view.team.TeamList',
        'QsoftTrainingApp.view.teamtree.TeamTreeList'
    ],
    
    plugins: 'viewport',

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa fa-mortar-board'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Users',
        iconCls: 'fa-user',
        items: [{
            xtype: 'userslist' 
        }]
    }, {
        title: 'Team',
        iconCls: 'fa-users',
        items: [{
            xtype: 'teamslist' 
        }]
    }, {
        title: 'Team members',
        iconCls: 'fa fa-weixin',
        items: [{
            xtype: 'teamtreelist' 
        }]
    },{
        title: 'Sign out',        
        iconCls: 'fa-sign-out',
        ui: 'leftalign',
        tabConfig: {
            iconAlign: 'left',
            textAlign: 'left',
            listeners: { 
                click: 'onLogoutClick'
            },
            tooltip: 'Click here to logout out the app!'
        }
    }]
});