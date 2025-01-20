dictionary = ["below", "down", "go", "going", "horn", "how", "howdy", "it", "i", "low", "own", "part", "partner", "sit"]
word = "below"
sentence = "Howdy partner, sit down! How's it going?"

def substrings (text, dictionary) 
  splited_text = text.downcase.split(' ')
  hash_count = Hash.new(0)
  
  splited_text.each do |word|
    dictionary.each do |elem|
      if word.include?(elem)
        hash_count[elem] += 1
      end
    end
  end
  hash_count
end

p substrings(sentence, dictionary)