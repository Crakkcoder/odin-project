# frozen_string_literal: true

require_relative 'figure'

class Rook < Figure # rubocop:disable Style/Documentation
  def display
    return '♜' if @color == :white

    '♖'
  end

  def move_pattern
    [[-7, 0], [-6, 0], [-5, 0], [-4, 0], [-3, 0], [-2, 0], [-1, 0],
     [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0],
     [0, -7], [0, -6], [0, -5], [0, -4], [0, -3], [0, -2], [0, -1],
     [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7]]
  end
end
