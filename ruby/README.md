# Superhero Name Generator API - Ruby Gem

Generate unique superhero names using dynamic templates and word combinations.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_superheroname'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_superheroname
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_superheroname'

# Initialize the client
client = APIVerve::Superheroname::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({ style: "dark" })

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ style: "dark" })
  puts response["data"]
rescue APIVerve::Superheroname::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Superheroname::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Superheroname::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "name": "Lord Stalker",
    "style": "dark"
  }
}
```

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/superheroname?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/superheroname?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/superheroname?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
