package models

import "fmt"

type User struct {
	Username string `gorm:"primary_key" json:"username"`
	Password string `json:"password"`
	Name     string `json:"name"`
}

func Signup(username string, password string, name string) error {
	user := User{Username: username, Password: password, Name: name}
	err := db.Create(&user).Error
	return err
}

func Login(username string, password string) error {
	user := &User{Username: username}
	err := db.Where(&user).First(&user).Error
	if err != nil {
		return err
	}

	if user.Password != password {
		return fmt.Errorf("incorrect password")
	}

	return nil
}
