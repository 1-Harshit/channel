package models

import "fmt"

type User struct {
	Username string `gorm:"primary_key" json:"username"`
	Password string `json:"password"`
	Name     string `json:"name"`
}

type UserResponse struct {
	Username string `json:"username"`
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

func ListAllUsers() ([]UserResponse, error) {
	var users []User
	err := db.Find(&users).Error

	var userResponses []UserResponse
	for _, user := range users {
		userResponses = append(userResponses, UserResponse{Username: user.Username, Name: user.Name})
	}

	return userResponses, err
}

func GetUser(username string) (*UserResponse, error) {
	var user User
	err := db.Where("username = ?", username).First(&user).Error
	if err != nil {
		return nil, err
	}

	return &UserResponse{Username: user.Username, Name: user.Name}, nil
}
