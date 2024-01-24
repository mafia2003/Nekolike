module.exports = {
    app: {
        token: 'NzIzNzUxOTg3MTU3NjYzNzk0.GFf9oc.GYQ656y0sO46pZzwDim1AnjLL6ig1dyN2vaAskX',
        playing: 'by Mafia ❤️',
        global: true,
        guild: 'xxx',
        ExtraMessages: false,
        loopMessage: false,

    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        spotifyBridge: true,
        volume: 75,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 30000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 30000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
