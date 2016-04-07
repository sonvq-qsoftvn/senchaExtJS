/**
 * This view is an example list of people.
 */
Ext.define('QsoftTrainingApp.view.topicteam.TopicTeam', {
    extend: 'Ext.Panel',
    xtype: 'topicteamslist',
    
    requires: [

    ],
    
    title: 'Topic Team Lucky Wheel',
    id: "topicteamall",
    store: {
        
    },
    controller: 'topicteam',
    alias   : 'widget.topicteamslist',
    items: [
        {
            html: '<div id="amazing-wheel-container"></div>',
            xtype: "panel"
        }
    ],

    style: 'background: #333333',
    listeners: {
        
    }
});

