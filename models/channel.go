package models

type Channel struct {
	Name        string `gorm:"primary_key" json:"name"`
	Description string `json:"description"`
}

func CreateChannel(name string, description string) error {
	channel := Channel{Name: name, Description: description}
	err := db.Create(&channel).Error
	return err
}

func GetAllChannels() ([]Channel, error) {
	var channels []Channel
	err := db.Find(&channels).Error
	return channels, err
}
