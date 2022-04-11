package models

import "time"

type Channel struct {
	Name         string `gorm:"primary_key" json:"name"`
	Description  string `json:"description"`
	CreatedAt    int64  `json:"createdAt"`
	UserUsername string `json:"createdByUsername"`
	User         User   `gorm:"foreignkey:UserUsername;constraint:OnUpdate:CASCADE,OnDelete:SET NULL;" json:"-"`
}

func CreateChannel(name string, description string, username string) error {
	time := time.Now().UnixMilli()
	channel := Channel{Name: name, Description: description, CreatedAt: time, UserUsername: username}
	err := db.Create(&channel).Error
	return err
}

func GetAllChannels() ([]Channel, error) {
	var channels []Channel
	err := db.Find(&channels).Error
	return channels, err
}

func DeleteChannel(name string) error {
	channel := Channel{Name: name}
	err := db.Delete(&channel).Error
	return err
}
