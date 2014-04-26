Parse.Cloud.define("sendTemplate", function(request, response) {
    var Mandrill = require('cloud/mandrillTemplateSend.js');

    Mandrill.initialize('YOUR MANDRILL API KEY');
    Mandrill.sendTemplate({
        template_name: request.params.templateName,
        template_content: [{
            name: "example name",
            content: "example content" //Those are required but they are ignored
        }],
        message: {
            to: [{
                email: request.params.toEmail,
                name: request.params.toName
            }],
            important: true
        },
        async: false
    }, {
        success: function (httpResponse) {
            console.log(httpResponse);
            response.success("Email sent!");
        },
        error: function (httpResponse) {
            console.error(httpResponse);
            response.error("Uh oh, something went wrong");
        }
    });
});