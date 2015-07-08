<!-- Challenge: Explain duck typing
Ruby is well known for it's use of duck typing. Please explain what this is and write a simple example of it in action. -->

**Duck Typing**
"If it walks like a duck, and talks like a duck, it's a duck!"

The age old phrase for making assumptions on something based on their behavior is alive and well in the ruby language. Object Oriented programming deals with types in different ways than other static-typed programming languages, in that it will allow you to create objects that specify methods to respond to, even though they were not defined with that behavior in mind...

Ways that a programmer can utilize this feature in ruby is creating methods that the object can respond to, to extend the objects behavior, without inheritence.

It also allows a programmer to write cleaner code, to keep from anticipating HOW someone may need to use the code, and allow for future changes.

One example to illustrate duck typing is thinking about how one method can recieve different object types, but will still run based on what the method can ask the object to do. If an object can RESPOND TO a method that is being called on it, it will run, hence, the "ducks" behavior, will let it be treated like a duck, at runtime.

```ruby
class Bunny
  def hop
    puts "hippity hop"
  end
end

class Frog
  def hop
    puts "Ribbity hippity hop"
  end
end

class MagicBean

  def hop
    enact_magic_spell
  end

  def enact_magic_spell
    3.times do
      "hocus-pocus"
    end
  end
end



def make_a_move(thing)
  thing.hop
end

make_a_move(Bunny.new)
make_a_move(Frog.new)
make_a_move(MagicBean.new)

```