package models

type Message struct {
	ID         uint   `gorm:"primary_key" json:"id"`
	Content    string `json:"content"`
	TimeSentAt string `json:"sentAt"`
	Username   string `json:"userId"`
	ChannelId  string `json:"channelId"`
}

func CreateMessage(content string, timeSentAt string, username string, channelId string) error {
	err := db.Create(&Message{Content: content, TimeSentAt: timeSentAt, Username: username, ChannelId: channelId}).Error
	return err
}

func GetMessages(channelId string) ([]Message, error) {
	var messages []Message
	err := db.Where("id = ?", channelId).Find(&messages).Error
	return messages, err
}
