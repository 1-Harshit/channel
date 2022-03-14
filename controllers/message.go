package controllers

import (
	"encoding/json"
	"net/http"

	"github.com/1-Harshit/channel/models"
	"github.com/1-Harshit/channel/utils"
	"github.com/gorilla/mux"
)

type CreateMessageRequest struct {
	Content    string `json:"content"`
	TimeSentAt string `json:"sentAt"`
}

func CreateMessage(w http.ResponseWriter, r *http.Request) {
	username := r.Header.Get("username")
	params := mux.Vars(r)
	channelID := params["channelID"]
	createMessageRequest := &CreateMessageRequest{}
	err := utils.ParseBody(r, createMessageRequest)
	if err != nil {
		utils.RespondWithError(w, http.StatusBadRequest, err.Error())
		return
	}

	err = models.CreateMessage(createMessageRequest.Content, createMessageRequest.TimeSentAt, username, channelID)
	if err != nil {
		utils.RespondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}

	w.WriteHeader(http.StatusOK)
}

func GetMessages(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	channelID := params["channelID"]

	messages, err := models.GetMessages(channelID)
	if err != nil {
		utils.RespondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}

	res, err := json.Marshal(messages)
	if err != nil {
		utils.RespondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)

}