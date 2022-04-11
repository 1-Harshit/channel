package controllers

import (
	"encoding/json"
	"net/http"

	"github.com/1-Harshit/channel/models"
	"github.com/1-Harshit/channel/utils"
	"github.com/gorilla/mux"
)

type CreateChannelRequest struct {
	Name        string `json:"name"`
	Description string `json:"description"`
}

func CreateChannel(w http.ResponseWriter, r *http.Request) {
	createChannelRequest := &CreateChannelRequest{}
	err := utils.ParseBody(r, createChannelRequest)
	if err != nil {
		utils.RespondWithError(w, http.StatusBadRequest, err.Error())
		return
	}
	username := r.Header.Get("username")
	err = models.CreateChannel(createChannelRequest.Name, createChannelRequest.Description, username)
	if err != nil {
		utils.RespondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}

	w.WriteHeader(http.StatusOK)
}

func GetAllChannels(w http.ResponseWriter, r *http.Request) {
	channels, err := models.GetAllChannels()
	if err != nil {
		utils.RespondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}
	res, err := json.Marshal(channels)
	if err != nil {
		utils.RespondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)

}

func DeleteChannel(w http.ResponseWriter, r *http.Request) {
	channelId := mux.Vars(r)["channelId"]
	err := models.DeleteChannel(channelId)
	if err != nil {
		utils.RespondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}
	w.WriteHeader(http.StatusOK)
}
