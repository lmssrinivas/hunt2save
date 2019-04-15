module.exports = {
  getPropDefination: function (type, required, unique)
  {
    let def = {};

    if (type)
    {
      def.type = type;
    }
    if (required !== null)
    {
      def.required = required;
    }
    if (unique)
    {
      def.unique = unique;
    }
    return def;

  }
};
