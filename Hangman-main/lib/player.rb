# frozen_string_literal: true

class Player
  def initialize(game)
    @game = game
  end

  def play
    puts "Welcome to Hangman! You have #{@game.max_incorrect} incorrect guesses. Good luck!"
    until @game.lost?
      puts 'Enter a letter or type (1) to save the game:'
      input = gets.chomp.downcase

      if input == '1'
        @game.save_game
        break
      end

      @game.make_guess(input)

      @game.display_status

      break if @game.won?
    end

    if @game.won?
      puts "Congratulations! You guessed the word: #{@game.secret_word}"
    else
      puts "Game over! The word was: #{@game.secret_word}"
    end
  end
end
