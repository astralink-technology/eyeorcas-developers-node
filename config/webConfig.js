exports.dbConfig = function(){
    var dbConfig = new Object();

    dbConfig.appName = 'eyeOrcas';
    dbConfig.username = 'ubuntu';
    dbConfig.password = 'astralink';
    dbConfig.host = 'api.eyeorcas.com';
    dbConfig.port = '5432';
    dbConfig.db = 'OrcasEye';

    return dbConfig;
}

exports.mailConfig = function(){

    var mailConfig = new Object();

    mailConfig.host = 'smtp.mandrillapp.com';
    mailConfig.username = 'shiweifong@gmail.com';
    mailConfig.password = '9nwaBLJV5FtYeOeyfF_yBQ';
    mailConfig.from = 'shiwei@chilli-panda.com';
    mailConfig.fromName = 'Astralink Technology';
    mailConfig.addReplyTo = 'info@astralink.com.sg';
    mailConfig.bcc = 'info@astralink.com.sg';

    return mailConfig;
}