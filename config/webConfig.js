exports.dbConfig = function(){
    var dbConfig = new Object();

    dbConfig.appName = 'astralink';
    dbConfig.username = 'ubuntu';
    dbConfig.password = 's8944896d';
    dbConfig.host = 'astralink-instance.cbummwrzqw10.ap-southeast-1.rds.amazonaws.com';
    dbConfig.port = '5432';
    dbConfig.db = 'astralinkdb';

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