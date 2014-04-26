<h1>parse-mandrill-sendTemplate</h1>

<p>this is a parse cloud module to send template mails from mandrill</p>

<h2>Usage Mandrill Send Template API:</h2>
<p>Fist copy the mandrillTemplateSend.js to your cloud folder generate from parse</p>
<p>Take the method in main.js and pasted in your own main.js, look you need to add you api key there</p>
<pre>
    var Mandrill = require('cloud/mandrillTemplateSend.js')

    Mandrill.initialize('YOUR MANDRILL API KEY');
</pre>
<p>The template_content is required but this is ignored so you can leave as it is</p>
<pre>
  template_content: [{
            name: "example name",
            content: "example content" //Those are required but they are ignored
        }]
</pre>
<p>Finally you can call it using REST parse api</p>
<pre>
    POST /1/functions/sendTemplate HTTP/1.1
    Host: api.parse.com
    X-Parse-Application-Id: Your Parse App Id
    X-Parse-REST-API-Key: Your Parse REST API Key

    {
        "templateName" : "Your template name",
        "toEmail" : "the mail you want to send",
        "toName" : "the name of whom you are sending"
    }
</pre>

<h2>Modifications to send to multiple mails</h2>
<p>if you wish to send this to multiple mails you can change this:</p>
<pre>
    to: [{
            email: request.params.toEmail,
            name: request.params.toName
        }],
</pre>
<p>to this:</p>
<pre>
    to: request.params.to,
</pre>
<p>in the main.js method<br>
<code>Parse.Cloud.define("sendTemplate", function(request, response)</code>,<br>
and then in the REST call you do:</p>
<pre>
    POST /1/functions/sendTemplate HTTP/1.1
    Host: api.parse.com
    X-Parse-Application-Id: Your Parse App Id
    X-Parse-REST-API-Key: Your Parse REST API Key

    {
      "templateName":"Your template name",
      "to":[
        {
          "email" :"the mail you want to send",
          "name" :"the name of whom you are sending"
        },
        {
          "email" : "the mail you want to send",
          "name" : "the name of whom you are sending"
        },
        {
          "email" : "the mail you want to send",
          "name" : "the name of whom you are sending"
        }
      ]
    }
</pre>