// SPDX-License-Identifier: GPL-3.0
// See <http://www.gnu.org/licenses/>.

(function() {
    var evm = require('./evm.js');
    var _replyMessage = (msg, data) => {
        // Send msg to parent.
        if (window.queueMessageReply) {
            setTimeout(() => {
                window.queueMessageReply({ data: data, id: msg.id });
            }, 1);
        }
    };
    var _queueMessage = msg => {
        // Got msg from parent.
        var cmd = msg.data;
        var result = { devkitVm: devkitVm };
        replyMessage(msg, result);
    };
    devkitVm.init(function(err, block) {
        if (err) {
            console.error(err);
        }
    });

    window.replyMessage = _replyMessage;
    window.queueMessage = _queueMessage;
})();
