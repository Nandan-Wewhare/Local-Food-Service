namespace LocalFoodBusinessLayer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class changeDatatype : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Users", "Mobile", c => c.String(nullable: false));
            AlterColumn("dbo.Orders", "Mobile", c => c.String(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Orders", "Mobile", c => c.Int(nullable: false));
            AlterColumn("dbo.Users", "Mobile", c => c.Int(nullable: false));
        }
    }
}
