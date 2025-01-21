# frozen_string_literal: true

require 'set'

def get_neighbors(x_position, y_position, knight_steps)
  neighbors = []
  knight_steps.each do |steps|
    neighbors_x = x_position + steps.first
    neighbors_y = y_position + steps.last
    if neighbors_x >= 0 && neighbors_x <= 7 && neighbors_y >= 0 && neighbors_y <= 7
      neighbors.push([neighbors_x,
                      neighbors_y])
    end
  end
  neighbors
end

def knight_moves(start, destination) # rubocop:disable Metrics/MethodLength
  knight_steps = [[2, 1], [1, 2], [-2, -1], [-1, -2], [2, -1], [-2, 1], [-1, 2], [1, -2]]
  queue = [[start, [start]]]
  visited = Set[]
  until queue.empty?
    current, path = queue.shift
    return path if current == destination

    next if visited.include?(current)

    visited.add(current)

    get_neighbors(current.first, current.last, knight_steps).each do |neighbor|
      queue.push([neighbor, path + [neighbor]]) unless visited.include?(neighbor)
    end
  end
  print visited
  print queue
end

p knight_moves([0, 0], [3, 3])
