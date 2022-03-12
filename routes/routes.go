package routes

import (
	"net/http"

	"github.com/1-Harshit/channel/controllers"
	"github.com/gorilla/mux"
)

func Setup() *mux.Router {
	r := mux.NewRouter()
	RegisterRoutes(r)
	buildHandler := http.FileServer(http.Dir("./web/build"))
	r.PathPrefix("/").Handler(buildHandler)
	http.Handle("/", r)
	return r
}

func RegisterRoutes(router *mux.Router) {

	// Channel
	router.HandleFunc("/channel", controllers.CreateChannel).Methods("POST")
	router.HandleFunc("/channels", controllers.GetAllChannels).Methods("GET")

}
