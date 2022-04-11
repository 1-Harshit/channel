package routes

import (
	"net/http"

	"github.com/1-Harshit/channel/controllers"
	"github.com/1-Harshit/channel/middleware"
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

	// Hello World
	router.HandleFunc("/", controllers.Index).Methods("GET")

	// Channel
	router.HandleFunc("/channel", middleware.IsAuthorized(controllers.CreateChannel)).Methods("POST")
	router.HandleFunc("/channels", middleware.IsAuthorized(controllers.GetAllChannels)).Methods("GET")

	// Message
	router.HandleFunc("/channel/{channelId}/message", middleware.IsAuthorized(controllers.CreateMessage)).Methods("POST")
	router.HandleFunc("/channel/{channelId}/messages", middleware.IsAuthorized(controllers.GetMessages)).Methods("GET")

	// User
	router.HandleFunc("/user/login", controllers.Login).Methods("POST")
	router.HandleFunc("/user/signup", controllers.Signup).Methods("POST")
	router.HandleFunc("/users", middleware.IsAuthorized(controllers.ListAllUsers)).Methods("GET")
	router.HandleFunc("/user/{userId}", middleware.IsAuthorized(controllers.GetUser)).Methods("GET")
}
