# frozen_string_literal: true

require 'json'

class Game
  attr_accessor :secret_word, :correct_guesses, :incorrect_guesses, :max_incorrect

  def initialize
    @words = File.read('google-10000-english-no-swears.txt').split
    @secret_word = random_word
    @correct_guesses = []
    @incorrect_guesses = []
    @max_incorrect = 6
  end

  def random_word
    selected_word = @words.select { |word| word.length >= 5 && word.length <= 12 }
    selected_word.sample
  end

  def display_status
    masked_word = @secret_word.chars.map { |char| @correct_guesses.include?(char) ? char : '_' }.join(' ')
    puts "Secret word : #{masked_word}"
    puts "Correct guesses: #{@correct_guesses.join(', ')}"
    puts "Incorrect guesses: #{@incorrect_guesses.join(', ')}"
    puts "Guesses left: #{@max_incorrect - @incorrect_guesses.length}"
  end

  def save_game
    game_state = {
      secret_word: @secret_word,
      correct_guesses: @correct_guesses,
      incorrect_guesses: @incorrect_guesses,
      max_incorrect: @max_incorrect
    }
    File.open('saved_game.json', 'w') { |file| file.write(game_state.to_json) }
    puts 'Game saved!'
  end

  def load_game
    if File.exist?('saved_game.json')
      game_state = JSON.parse(File.read('saved_game.json'), symbolize_names: true)
      @secret_word = game_state[:secret_word]
      @correct_guesses = game_state[:correct_guesses] || []
      @incorrect_guesses = game_state[:incorrect_guesses] || []
      @max_incorrect = game_state[:max_incorrect] || 6
    else
      puts 'No saved game found'
    end
  end

  def make_guess(guess)
    if secret_word.include?(guess)
      correct_guesses << guess unless correct_guesses.include?(guess)
    else
      incorrect_guesses << guess unless incorrect_guesses.include?(guess)
    end
  end

  def won?
    (@secret_word.chars - @correct_guesses).empty?
  end

  def lost?
    @incorrect_guesses.length >= @max_incorrect
  end
end
