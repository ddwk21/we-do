const User = require('./User');
const Event = require('./Event')
const Message = require('./Message')

User.hasMany(Event, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
} )

Event.hasMany(Message, {
    foreignKey: 'event_id',
    onDelete: 'CASCADE',
} )

Event.belongsTo(User, {
    foreignKey: 'user_id',
} )

Message.belongsTo(Event, {
    foreignKey: 'event_id',
} )

module.exports = { User, Event, Message };
