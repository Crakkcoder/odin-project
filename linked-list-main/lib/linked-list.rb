require_relative 'node'

class LinkedList
  def initialize
    @head = nil
    @tail = nil
    @size = 0
  end

  def append(value)
    new_node = Node.new(value)
    if @head.nil?
      @head = new_node
      @tail = new_node
    else
      @tail.next_node = new_node
      @tail = new_node
    end
    @size += 1
  end

  def prepend(value)
    new_node = Node.new(value, @head)
    @head = new_node
    @tail = new_node if @tail.nil?
    @size += 1
  end

  def size
    @size
  end

  def head
    @head
  end

  def tail
    @tail
  end

  def at(index)
    return nil if index < 0 || index >= @size

    current_node = @head
    index.times do
      current_node = current_node.next_node
    end
    current_node
  end

  def pop
    return nil if @size.zero?
    popped = @tail
    if @head == @tail
      @head = nil
      @tail = nil
    else
      current_node = @head
      current_node = current_node.next_node while current_node.next_node != @tail
      current_node.next_node = nil
      @tail = current_node
    end
    @size -= 1 
    popped
  end

  def contains?(value)
    current_node = @head
    while current_node
      return true if current_node.value == value
      current_node = current_node.next_node
    end
    false
  end

  def find(value)
    index = 0
    current_node = @head
    while current_node
      return index if current_node.value == value
      current_node = current_node.next_node
      index += 1
    end
    nil
  end

  def to_s
    current_node = @head
    result = ""
    while current_node
      result += "( #{current_node.value} ) -> "
      current_node = current_node.next_node
    end
    result += "nil"
  end

end