namespace LocalFoodBusinessLayer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class updatedOrder : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Orders", "ProductID", "dbo.Products");
            DropIndex("dbo.Orders", new[] { "ProductID" });
            DropColumn("dbo.Orders", "Email");
            DropColumn("dbo.Orders", "Mobile");
            DropColumn("dbo.Orders", "ProductName");
            DropColumn("dbo.Orders", "Quantity");
            DropColumn("dbo.Orders", "ProductID");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Orders", "ProductID", c => c.Int(nullable: false));
            AddColumn("dbo.Orders", "Quantity", c => c.Int(nullable: false));
            AddColumn("dbo.Orders", "ProductName", c => c.String(nullable: false, maxLength: 50));
            AddColumn("dbo.Orders", "Mobile", c => c.String(nullable: false));
            AddColumn("dbo.Orders", "Email", c => c.String(nullable: false, maxLength: 50));
            CreateIndex("dbo.Orders", "ProductID");
            AddForeignKey("dbo.Orders", "ProductID", "dbo.Products", "ProductID", cascadeDelete: true);
        }
    }
}
