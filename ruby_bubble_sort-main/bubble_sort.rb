def bubble(arr)
    n = arr.length
    loop do
        sorted = true
        (n - 1).times do |index|
            if arr[index] > arr[index + 1]
                arr[index], arr[index + 1] = arr[index + 1], arr[index]
                sorted = false
            
            end
            
        end
        break if sorted == true
    end
    arr
end

raw_array = [4, 3, 10, 5, 1, 7, 2, 3]
cooked_array = bubble(raw_array)
puts cooked_array 
