package models

import (
	"github.com/1-Harshit/channel/config"
	"gorm.io/gorm"
)

var db *gorm.DB

func init() {
	config.ConnectDB()
	db = config.GetDB()
	db.AutoMigrate(&Channel{})
}
