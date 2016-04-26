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
        'QsoftTrainingApp.view.teamtree.TeamTreeList',
        'QsoftTrainingApp.view.topicteam.TopicTeam',
        'QsoftTrainingApp.view.dashboard.TeamDashboard',        
        'QsoftTrainingApp.view.dashboard.ScoreDashboard'
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
            flex: 0
        },
        iconCls: 'fa fa-mortar-board'
//        bind: {
//            title: '<div class="app-title">QSoft Training App<br> <span>Wellcome, ' + localStorage.getItem('username') + ' </span></div>'
//        }
    },

    listeners: {
        afterrender: function (panel) {
            var headerTitle = '<div class="app-title">QSoft Training App<br> <span>Wellcome, ' + localStorage.getItem('username') + ' </span></div>'
            panel.setTitle(headerTitle);
            
            var topicTeamTab = {
                title: 'Topic - Team',
                iconCls: 'fa fa-tachometer',
                items: [{
                    xtype: 'topicteamslist' 
                }],
                id: 'topicteamwheel',
                listeners: {
                    show: 'onTopicTeamShow'
                }
            };
            
            var logoutTab = {
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
            };
            
            if (localStorage.getItem('role') == 'admin') { 
                panel.add(topicTeamTab);    
            }
            
            panel.add(logoutTab);
        },
        
        tabchange: function (tabPanel, tab) {
           
        }
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
        title: 'Dashboard',
        iconCls: 'fa fa-area-chart',
        items:[{
            title: 'Qsoft Training App Overview',
            xtype: 'tabpanel',
            style: 'background: #fff',
            layout: 'fit',
            id: 'dashboardtab',
            items: [
            {
                xtype: 'overviewdashboard'               
            },
            {
                xtype: 'teamdashboard'
            },
            {
                xtype: 'scoredashboard'
            }, 
            {
                xtype: 'panel',
                title: 'About App',
                html: '<div class="about-app-section"></div>',
                listeners: {
                    show: 'onAboutAppShow'
                }
            },
            {
                xtype: 'panel',
                title: 'About Me',
                html: '<div class="about-me-section"></div>',
                listeners: {
                    show: 'onAboutMeShow'
                }
            },
            {
                xtype: 'panel',
                title: 'About Us',
                html: '<div class="about-us-section"></div>',
                listeners: {
                    show: 'onAboutUsShow'
                }
            },
            {
                xtype: 'panel',
                title: 'Future work',
                html: '<div class="future-work-section"></div>',
                listeners: {
                    show: 'onFutureWorkShow'
                }
            }
            ]
        }]
    }, {
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
    }, {
        title: 'Topic',
        iconCls: 'fa fa-book',
        items: [{
            xtype: 'topicslist' 
        }]
    }]
});

