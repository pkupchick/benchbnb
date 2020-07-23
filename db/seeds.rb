# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Bench.destroy_all

Bench.create(description: "Hobo Heaven", lat: 37.759517, lng: -122.454432)
Bench.create(description: "Hobo Hell", lat: 37.760827, lng: -122.451970)