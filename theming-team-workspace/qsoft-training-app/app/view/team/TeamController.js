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
    
    onTeamSelected: function(me, record, item, index) {
        if (localStorage.getItem('role') == 'admin') { 
            if (Ext.getCmp('addteamwindow') != null) {
                Ext.getCmp('addteamwindow').destroy();
            }
            var createTeamForm = Ext.create('QsoftTrainingApp.view.team.TeamForm');
            createTeamForm.setTitle('Edit Team');
            createTeamForm.setAction('edit');
            createTeamForm.setRecordIndex(record.getData());

            createTeamForm.down('form').getForm().setValues(record.getData());

            createTeamForm.show();
        }
    },
    
    doAddOrUpdateTeam: function () {          
        var teamFormValue = this.lookupReference('addteamform').getValues();        

        var that = this;       
        
        var formAction = Ext.getCmp('addteamwindow').getAction();
                
        if (teamFormValue.name == '' || teamFormValue.slogan == '') {
            Ext.Msg.show({
                title: 'Form error',
                msg: 'Name and slogan fields are required',
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.ERROR
            });
        } else {
            
            var teamParams = new Object();
            teamParams.name = teamFormValue.name;
            teamParams.slogan = teamFormValue.slogan;            
            teamParams.token = localStorage.getItem("tokenKey");

            var ajaxUrl = '';
            var method = '';
            var textMessage = '';
            if (formAction == 'add') {
                textMessage = 'create';    
                ajaxUrl = QsoftTrainingApp.common.variable.Global.baseApiURL + 'teams';
                method = 'POST';
            } else if (formAction == 'edit') {
                var objectEdit = Ext.getCmp('addteamwindow').getRecordIndex();
                ajaxUrl = QsoftTrainingApp.common.variable.Global.baseApiURL + 'teams/' + objectEdit._id;
                method = 'PUT';
                textMessage = 'update';    
            }
            Ext.Ajax.request({
                url: ajaxUrl,
                method: method,
                params: teamParams,
                success: function (response) {
                    if (response.status == '200') {
                        var messageShow = 'Successfully ' + textMessage + ' a team named: ' + teamFormValue.name;
                        Ext.Msg.show({
                            title: 'Team info',
                            msg: messageShow,
                            buttons: Ext.Msg.OK,
                            icon: 'smiles-icon',
                            fn: function (btn) {
                                if (btn == 'ok') {
                                    QsoftTrainingApp.common.function.CommonFunction.reloadStore();
                                    Ext.getCmp('addteamwindow').close();                                    
                                }
                            }
                        });
                    }                    
                },
                failure: function (response) {
                    var messageShow = 'Error, ' + textMessage + ' team failed';
                    if (response.status == '412') {
                        var textReturn = Ext.decode(response.responseText);
                        var validationObject = textReturn.validation;
                        var messageError = validationObject[Object.keys(validationObject)[0]];
                        Ext.Msg.show({
                            title: messageShow,
                            msg: messageError,
                            buttons: Ext.Msg.OK,
                            icon: Ext.Msg.ERROR
                        }); 
                    } else {
                        Ext.Msg.show({
                            title: messageShow,
                            msg: Ext.decode(response.responseText),
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
        createTeamForm.setAction('add');
        createTeamForm.show();
    }
});
