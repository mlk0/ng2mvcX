using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngWithMVC.Startup))]
namespace AngWithMVC
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
