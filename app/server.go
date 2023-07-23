package main

import (
	"database/sql"
	"fmt"
	"log"

	"github.com/99designs/gqlgen/graphql/handler/transport"
	"github.com/go-chi/chi"

	"my_gql_server/graph"

	"my_gql_server/presentations"
	"net/http"
	"os"

	"github.com/gorilla/websocket"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/rs/cors"
	"github.com/volatiletech/sqlboiler/v4/boil"
)

const defaultPort = "8888"

const clientSideHost = "http://localhost:3000"

func main() {

	router := chi.NewRouter()

	router.Use(cors.New(cors.Options{
		AllowedOrigins:   []string{clientSideHost},
		AllowCredentials: true,
		Debug:            true,
	}).Handler)

	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	connectDB, err := sql.Open("postgres", fmt.Sprintf("host=postgres dbname=%s user=%s password=%s sslmode=disable", "postgres", "postgres", "postgres"))

	if err != nil {
		panic(fmt.Errorf("connect db error"))
	}

	boil.SetDB(connectDB)

	srv := handler.NewDefaultServer(graph.NewExecutableSchema(graph.Config{Resolvers: &presentations.Resolver{}}))

	srv.AddTransport(&transport.Websocket{
		Upgrader: websocket.Upgrader{
			CheckOrigin: func(r *http.Request) bool {
				// Check against your desired domains here
				return r.Host == "http://127.0.0.1"
			},
			ReadBufferSize:  1024,
			WriteBufferSize: 1024,
		},
	})

	mux := http.NewServeMux()
	mux.HandleFunc("/", func(w http.ResponseWriter, _ *http.Request) {
		w.Header().Set("Content-Type", "application/json")
	})

	router.Handle("/", playground.Handler("GraphQL playground", "/query"))
	router.Handle("/query", srv)

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, router))

}
