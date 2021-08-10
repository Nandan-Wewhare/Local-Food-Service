namespace LocalFoodBusinessLayer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class updateproducttable : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Products", "COD");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Products", "COD", c => c.Boolean(nullable: false));
        }
    }
}
