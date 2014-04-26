var _apiUrl = 'mandrillapp.com/api/1.0';
var _apiKey = '';

exports.initialize = function(apiKey) {
    _apiKey = apiKey;
};

exports.sendTemplate = function(request, response) {
    request.key = _apiKey;

    return Parse.Cloud.httpRequest({
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        url: 'https://' + _apiUrl + '/messages/send-template.json',
        body: request,
        success: function(httpResponse) {
            response.success(httpResponse);
        },
        error: function(httpResponse) {
            response.error(httpResponse);
        }
    });
};
