/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('QsoftTrainingApp.view.team.TeamController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.team',

    store: 'Teams',
    
    init: function () {
        this.control({
            'teamslist > toolbar > button[action=add]': {
                click: this.showAddForm
            }
        });
    },   
    
    doAddTeam: function () {          
        var teamFormValue = this.lookupReference('addteamform').getValues();        
        
        var that = this;       

        if (teamFormValue.name == '' || teamFormValue.slogan == '') {
            Ext.Msg.show({
                title: 'Form error',
                msg: 'Name and slogan fields are required',
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.ERROR
            });
        } else {
            var createTeamParams = new Object();
            createTeamParams.name = teamFormValue.name;
            createTeamParams.slogan = teamFormValue.slogan;
            createTeamParams.token = localStorage.getItem("tokenKey");

            Ext.Ajax.request({
                url: QsoftTrainingApp.common.variable.Global.baseTeamApiURL,
                method: 'POST',
                params: createTeamParams,
                success: function (response) {
                    if (response.status == '200') {
                        var messageShow = 'Successfully created a new team named: ' + teamFormValue.name;
                        Ext.Msg.show({
                            title: 'Created new team',
                            msg: messageShow,
                            buttons: Ext.Msg.OK,
                            icon: 'smiles-icon',
                            fn: function (btn) {
                                if (btn == 'ok') {
                                    Ext.getCmp('teamlistall').getStore().load();
                                    Ext.getCmp('addteamwindow').close();                                    
                                }
                            }
                        });
                    }                    
                },
                failure: function (response) {
                    if(response.status == '401') {
                        Ext.Msg.show({
                            title: 'Create team failed',
                            msg: Ext.decode(response.responseText),
                            buttons: Ext.Msg.OK,
                            icon: Ext.Msg.ERROR
                        }); 
                    } else if (response.status == '412') {
                        var textReturn = Ext.decode(response.responseText);
                        var messageError = textReturn.validation.name;
                        console.log(messageError);
                        Ext.Msg.show({
                            title: 'Create team failed',
                            msg: messageError,
                            buttons: Ext.Msg.OK,
                            icon: Ext.Msg.ERROR
                        }); 
                    }
                }
            });
        }                
    },
    
    showAddForm: function () {
        if (Ext.getCmp('addteamwindow') != null) {
            Ext.getCmp('addteamwindow').destroy();
        }
        var createTeamForm = Ext.create('QsoftTrainingApp.view.team.TeamForm');
        
        createTeamForm.show();
    }
});
