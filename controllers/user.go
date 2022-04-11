package controllers

import (
	"encoding/json"
	"net/http"

	"github.com/1-Harshit/channel/models"
	"github.com/1-Harshit/channel/utils"
)

func ListAllUsers(w http.ResponseWriter, r *http.Request) {
	users, err := models.ListAllUsers()
	if err != nil {
		utils.RespondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}

	res, err := json.Marshal(users)
	if err != nil {
		utils.RespondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}
