using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.SuperheroNameGenerator
{
    /// <summary>
    /// Query options for the Superhero Name Generator API
    /// </summary>
    public class SuperheroNameGeneratorQueryOptions
    {
        /// <summary>
        /// Name style: dark, cosmic, elemental, tech, heroic, mystic
        /// Example: dark
        /// </summary>
        [JsonProperty("style")]
        public string Style { get; set; }
    }
}
