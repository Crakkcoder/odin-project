# frozen_string_literal: true

require_relative 'lib/game'
require_relative 'lib/player'

# Main class
class Main
  def self.start
    puts 'Do you want to (1) start a new game or (2) load a saved game? Enter 1 or 2:'
    choice = gets.chomp

    game = Game.new
    game.load_game if choice == '2'

    player = Player.new(game)
    player.play
  end
end

Main.start
