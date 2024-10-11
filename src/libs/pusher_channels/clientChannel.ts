import Pusher from "pusher-js";

const PusherClient = new Pusher('d13dce0ca416f8835441', {
    cluster: 'ap1'
})

export default PusherClient